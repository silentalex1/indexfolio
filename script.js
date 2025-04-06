@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: #0a192f;
    color: #ccd6f6;
    line-height: 1.8;
    overflow-x: hidden;
    background-image: radial-gradient(circle at 10% 20%, rgba(100, 255, 218, 0.03) 0%, transparent 40%),
                     radial-gradient(circle at 90% 80%, rgba(100, 255, 218, 0.05) 0%, transparent 40%);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

nav {
    background: rgba(17, 34, 64, 0.95);
    padding: 1rem 0;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 4px 20px rgba(0, 123, 255, 0.2);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(100, 255, 218, 0.1);
}

nav .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav .logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: #64ffda;
    text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
    letter-spacing: 1px;
}

nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 0.8rem;
}

nav ul li a {
    color: #ccd6f6;
    text-decoration: none;
    font-weight: 500;
    padding: 8px 18px;
    border-radius: 8px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    display: block;
    letter-spacing: 0.5px;
    font-size: 0.95rem;
    border: 1px solid transparent;
}

nav ul li a:hover {
    background: rgba(100, 255, 218, 0.1);
    color: #64ffda;
    border: 1px solid rgba(100, 255, 218, 0.3);
    transform: translateY(-2px);
}

nav ul li a.active {
    background: rgba(100, 255, 218, 0.1);
    color: #64ffda;
    border: 1px solid rgba(100, 255, 218, 0.3);
}

.progress-header {
    background: linear-gradient(135deg, #112240, #0a192f);
    color: #64ffda;
    padding: 6rem 0;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.progress-header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
        radial-gradient(circle at 20% 30%, rgba(100, 255, 218, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, rgba(100, 255, 218, 0.1) 0%, transparent 50%);
}

.progress-header h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
    background: linear-gradient(to right, #64ffda, #8aa2f8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(100, 255, 218, 0.3);
    position: relative;
}

.progress-header p {
    font-size: 1.3rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
    color: #a8b2d1;
}

.content-section {
    padding: 5rem 0;
    text-align: center;
    position: relative;
    background: rgba(17, 34, 64, 0.3);
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.floating-stars {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 0;
}

.star {
    position: absolute;
    background: #64ffda;
    border-radius: 50%;
    opacity: 0.2;
    animation: twinkle 4s infinite ease-in-out;
}

@keyframes twinkle {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.5; }
}

.crx-box {
    max-width: 700px;
    margin: auto;
    background: rgba(17, 34, 64, 0.8);
    padding: 3.5rem;
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
    position: relative;
    z-index: 1;
    border: 1px solid rgba(100, 255, 218, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.crx-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(100, 255, 218, 0.1);
}

.crx-box h2 {
    color: #64ffda;
    font-size: 2rem;
    margin-bottom: 1.8rem;
    text-align: center;
    position: relative;
    padding-bottom: 15px;
}

.crx-box h2::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(to right, #64ffda, transparent);
    border-radius: 3px;
}

.crx-box p {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
    color: #a8b2d1;
    line-height: 1.9;
}

.input-container {
    margin: 2rem 0;
}

#crxInput {
    width: 100%;
    padding: 16px 20px;
    font-size: 1.1rem;
    background: rgba(15, 30, 57, 0.7);
    color: #ccd6f6;
    border: 1px solid rgba(100, 255, 218, 0.2);
    border-radius: 8px;
    transition: all 0.3s ease;
    outline: none;
}

#crxInput:focus {
    border-color: #64ffda;
    box-shadow: 0 0 15px rgba(100, 255, 218, 0.2);
}

#crxInput::placeholder {
    color: #8892b0;
    opacity: 0.8;
}

.buttons-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 2rem 0;
}

.primary-btn, .secondary-btn {
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
    border: none;
    outline: none;
}

.primary-btn {
    background: #64ffda;
    color: #0a192f;
    border: 1px solid transparent;
}

.primary-btn:hover {
    background: rgba(100, 255, 218, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(100, 255, 218, 0.2);
}

.secondary-btn {
    background: transparent;
    color: #64ffda;
    border: 1px solid #64ffda;
}

.secondary-btn:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(100, 255, 218, 0.1);
}

.scan-container {
    margin-top: 2rem;
    height: 0;
    overflow: hidden;
    transition: height 0.5s ease;
}

.scan-container.active {
    height: 120px;
}

.scan-animation {
    height: 60px;
    position: relative;
    background: rgba(15, 30, 57, 0.5);
    border-radius: 8px;
    overflow: hidden;
}

.scan-line {
    height: 2px;
    width: 100%;
    background: linear-gradient(to right, transparent, #64ffda, transparent);
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-50%);
    animation: scan 2s linear infinite;
    opacity: 0;
}

@keyframes scan {
    0% {
        top: 0;
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        top: 100%;
        opacity: 0;
    }
}

.scan-result {
    padding: 15px;
    text-align: center;
    font-size: 1.1rem;
    color: #64ffda;
    margin-top: 10px;
    opacity: 0;
    transition: opacity 0.5s ease;
    height: 50px;
}

.scan-result.visible {
    opacity: 1;
}

footer {
    text-align: center;
    padding: 3rem 0;
    background: rgba(10, 25, 47, 0.95);
    color: #a8b2d1;
    border-top: 1px solid rgba(100, 255, 218, 0.1);
}

footer p {
    font-size: 1rem;
    opacity: 0.8;
}

footer span {
    color: #64ffda;
    font-weight: 500;
}

@media (prefers-reduced-motion: no-preference) {
    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }
}

.shake {
    animation: shake 0.5s ease-in-out;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-5px); }
    40%, 80% { transform: translateX(5px); }
}
