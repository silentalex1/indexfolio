document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.getElementById('stars');
    const crxInput = document.getElementById('crxInput');
    const downloadBtn = document.getElementById('downloadBtn');
    const validateBtn = document.getElementById('validateBtn');
    const scanContainer = document.getElementById('scanContainer');
    const scanResult = document.getElementById('scanResult');
    
    createStars();
    setupEventListeners();
    
    function createStars() {
        const numberOfStars = 50;
        
        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            
            const size = Math.random() * 3 + 1;
            
            const delay = Math.random() * 4;
            
            star.style.left = `${posX}%`;
            star.style.top = `${posY}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.animationDelay = `${delay}s`;
            
            starsContainer.appendChild(star);
        }
    }
    
    function setupEventListeners() {
        downloadBtn.addEventListener('click', handleDownload);
        validateBtn.addEventListener('click', handleValidate);
        crxInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleDownload();
            }
        });
    }
    
    function handleDownload() {
        const input = crxInput.value.trim();
        
        if (!input) {
            shake(crxInput);
            return;
        }
        
        let extensionId = extractExtensionId(input);
        
        if (!extensionId) {
            shake(crxInput);
            return;
        }
        
        const downloadUrl = `https://clients2.google.com/service/update2/crx?response=redirect&prodversion=49.0&acceptformat=crx3&x=id%3D${extensionId}%26installsource%3Dondemand%26uc`;
        
        triggerDownload(downloadUrl, `extension-${extensionId}.crx`);
        
        animateButton(downloadBtn);
    }
    
    function handleValidate() {
        const input = crxInput.value.trim();
        
        if (!input) {
            shake(crxInput);
            return;
        }
        
        let extensionId = extractExtensionId(input);
        
        if (!extensionId) {
            shake(crxInput);
            return;
        }
        
        animateButton(validateBtn);
        startScanAnimation();
        
        setTimeout(() => {
            fetchExtensionDetails(extensionId);
        }, 500);
    }
    
    function extractExtensionId(input) {
        let extensionId = input;
        
        if (input.includes('chrome.google.com/webstore')) {
            const match = input.match(/\/([a-z]{32})/i);
            if (match && match[1]) {
                extensionId = match[1];
            } else {
                return null;
            }
        } else if (input.includes('chrome-extension://')) {
            const match = input.match(/chrome-extension:\/\/([a-z]{32})/i);
            if (match && match[1]) {
                extensionId = match[1];
            } else {
                return null;
            }
        } else if (!/^[a-z]{32}$/i.test(input)) {
            return null;
        }
        
        return extensionId;
    }
    
    function fetchExtensionDetails(extensionId) {
        const apiUrl = `https://chrome-extension-data.vercel.app/api/extension/${extensionId}`;
        
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                let extensionName = data && data.name ? data.name : 'Valid Extension';
                showScanResult(`${extensionName}`);
            })
            .catch(error => {
                showScanResult(`Valid Extension ID: ${extensionId}`);
            });
    }
    
    function startScanAnimation() {
        scanContainer.classList.add('active');
        scanResult.classList.remove('visible');
        
        const scanLine = document.querySelector('.scan-line');
        scanLine.style.animation = 'none';
        setTimeout(() => {
            scanLine.style.animation = 'scan 2s linear infinite';
        }, 10);
    }
    
    function showScanResult(text) {
        setTimeout(() => {
            scanResult.textContent = text;
            scanResult.classList.add('visible');
            
            setTimeout(() => {
                const scanLine = document.querySelector('.scan-line');
                scanLine.style.animation = 'none';
            }, 500);
        }, 2000);
    }
    
    function triggerDownload(url, filename) {
        const tempLink = document.createElement('a');
        tempLink.style.display = 'none';
        tempLink.href = url;
        tempLink.setAttribute('download', filename);
        tempLink.setAttribute('target', '_blank');
        
        document.body.appendChild(tempLink);
        tempLink.click();
        
        setTimeout(() => {
            document.body.removeChild(tempLink);
        }, 100);
    }
    
    function shake(element) {
        element.classList.add('shake');
        setTimeout(() => {
            element.classList.remove('shake');
        }, 500);
    }
    
    function animateButton(button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    }
});
