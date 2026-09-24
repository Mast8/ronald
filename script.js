
        // Data Structures
        const typingPhrases = [
            "Modern Web Apps.",
            "Scalable Architectures.",
            "Intuitive Interfaces.",
            "Full-Stack Solutions."
        ];

        const skillsData = {
            frontend: [
                { name: "React / Next.js", level: 95, icon: "fa-brands fa-react" },
                { name: "TypeScript", level: 90, icon: "fa-solid fa-code" },
                { name: "Tailwind CSS", level: 98, icon: "fa-solid fa-palette" },
                { name: "Vue.js", level: 82, icon: "fa-brands fa-vuejs" },
                { name: "WebGL / Three.js", level: 75, icon: "fa-solid fa-cube" }
            ],
            backend: [
                { name: "Node.js / Express", level: 88, icon: "fa-brands fa-node-js" },
                { name: "Python / FastAPI", level: 85, icon: "fa-brands fa-python" },
                { name: "PostgreSQL / Prisma", level: 80, icon: "fa-solid fa-database" },
                { name: "GraphQL", level: 78, icon: "fa-solid fa-network-wired" }
            ],
            tools: [
                { name: "Docker & Kubernetes", level: 75, icon: "fa-brands fa-docker" },
                { name: "Git & CI/CD", level: 92, icon: "fa-brands fa-git-alt" },
                { name: "AWS Cloud Services", level: 80, icon: "fa-brands fa-aws" },
                { name: "Figma UI Design", level: 85, icon: "fa-brands fa-figma" }
            ]
        };

        const projectsData = [
            {
                id: 1,
                title: "Apex Analytics Engine",
                category: "fullstack",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&q=80",
                summary: "Real-time enterprise dashboard rendering complex dataset visualisations.",
                description: "Built for high-volume enterprise metric monitoring. Utilizes WebSockets for real-time telemetry streaming and D3.js for custom graph rendering.",
                tags: ["React", "TypeScript", "Node.js", "WebSockets"],
                demoUrl: "#",
                githubUrl: "#"
            },
            {
                id: 2,
                title: "Visionary AI Studio",
                category: "ai",
                image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?fit=crop&w=800&q=80",
                summary: "Generative AI Web App for real-time canvas image editing.",
                description: "Leverages cloud inference models to offer prompt-based asset generation, layer composition, and automated canvas enhancement.",
                tags: ["Next.js", "Python", "FastAPI", "Tailwind"],
                demoUrl: "#",
                githubUrl: "#"
            },
            {
                id: 3,
                title: "Aether UI Design System",
                category: "frontend",
                image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?fit=crop&w=800&q=80",
                summary: "Accessible dark-mode component library with custom animations.",
                description: "Comprehensive React UI toolkit engineered for accessibility (WCAG AAA compliance), complete with interactive storybooks and theme customization.",
                tags: ["React", "Tailwind CSS", "Framer Motion"],
                demoUrl: "#",
                githubUrl: "#"
            },
            {
                id: 4,
                title: "Crypta DeFi Portfolio",
                category: "fullstack",
                image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?fit=crop&w=800&q=80",
                summary: "Decentralized finance portfolio manager with gas estimation tools.",
                description: "Tracks multi-chain token balances and historical performance analytics using Web3 providers and automated price aggregation.",
                tags: ["Ethers.js", "React", "GraphQL"],
                demoUrl: "#",
                githubUrl: "#"
            }
        ];

        // Animated Typing Effect Logic
        let currentPhraseIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        const typingElement = document.getElementById('typing-text');

        function typeEffect() {
            const currentPhrase = typingPhrases[currentPhraseIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
                currentCharIndex--;
            } else {
                typingElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
                currentCharIndex++;
            }

            let speed = isDeleting ? 40 : 80;

            if (!isDeleting && currentCharIndex === currentPhrase.length) {
                speed = 2000; // Pause at end of word
                isDeleting = true;
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % typingPhrases.length;
                speed = 500;
            }

            setTimeout(typeEffect, speed);
        }

        // Skills Matrix Rendering
        function renderSkills(category) {
            const container = document.getElementById('skills-container');
            const items = skillsData[category] || [];
            
            container.innerHTML = items.map(skill => `
                <div class="glass-panel p-5 rounded-2xl border border-white/5 space-y-2">
                    <div class="flex justify-between items-center text-sm">
                        <span class="font-medium flex items-center gap-2">
                            <i class="${skill.icon} text-brand-500"></i> ${skill.name}
                        </span>
                        <span class="font-mono text-brand-cyan text-xs">${skill.level}%</span>
                    </div>
                    <div class="w-full h-2 rounded-full bg-dark-bg overflow-hidden">
                        <div class="h-full rounded-full bg-gradient-to-r from-brand-600 to-brand-cyan transition-all duration-1000 ease-out" 
                             style="width: ${skill.level}%"></div>
                    </div>
                </div>
            `).join('');
        }

        // Project Cards Rendering
        function renderProjects(filter = 'all') {
            const grid = document.getElementById('projects-grid');
            const filtered = filter === 'all' 
                ? projectsData 
                : projectsData.filter(p => p.category === filter);

            grid.innerHTML = filtered.map(project => `
                <div class="glass-panel rounded-2xl overflow-hidden glass-panel-hover transition-all flex flex-col group border border-white/5">
                    <div class="relative overflow-hidden aspect-video">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                             onerror="this.src='https://placehold.co/800x450/131b2e/ffffff?text=Project+Preview'">
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                            <button onclick="openModal(${project.id})" class="p-3 rounded-full bg-brand-600 text-white hover:scale-110 transition-transform">
                                <i class="fa-solid fa-eye text-sm"></i>
                            </button>
                        </div>
                    </div>
                    <div class="p-6 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 class="text-xl font-bold mb-2 text-white">${project.title}</h3>
                            <p class="text-gray-400 text-sm mb-4 leading-relaxed">${project.summary}</p>
                        </div>
                        <div>
                            <div class="flex flex-wrap gap-2 mb-4">
                                ${project.tags.map(tag => `<span class="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-brand-cyan">${tag}</span>`).join('')}
                            </div>
                            <button onclick="openModal(${project.id})" class="text-xs font-mono text-brand-500 hover:text-brand-cyan flex items-center gap-1 transition-colors">
                                View Details <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Modal Functionality
        function openModal(projectId) {
            const project = projectsData.find(p => p.id === projectId);
            if (!project) return;

            const modal = document.getElementById('project-modal');
            const modalContent = document.getElementById('modal-content');
            const modalBody = document.getElementById('modal-body');

            modalBody.innerHTML = `
                <div class="relative aspect-video rounded-2xl overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover">
                </div>
                <div>
                    <h2 class="text-2xl font-bold mb-2">${project.title}</h2>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${project.tags.map(tag => `<span class="text-xs font-mono px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-cyan border border-brand-500/20">${tag}</span>`).join('')}
                    </div>
                    <p class="text-gray-300 text-sm leading-relaxed mb-6">${project.description}</p>
                    <div class="flex gap-4">
                        <a href="${project.demoUrl}" target="_blank" class="px-6 py-2.5 rounded-xl bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors flex items-center gap-2 text-sm">
                            Live Demo <i class="fa-solid fa-external-link text-xs"></i>
                        </a>
                        <a href="${project.githubUrl}" target="_blank" class="px-6 py-2.5 rounded-xl glass-panel text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2 text-sm">
                            Source Code <i class="fa-brands fa-github text-xs"></i>
                        </a>
                    </div>
                </div>
            `;

            modal.classList.remove('opacity-0', 'pointer-events-none');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('project-modal');
            const modalContent = document.getElementById('modal-content');

            modal.classList.add('opacity-0', 'pointer-events-none');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            document.body.style.overflow = 'auto';
        }

        // Form Validation & Handling
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const alertBox = document.getElementById('form-alert');

            // Simple Form Validation Rules
            if (!nameInput.value.trim()) {
                showError(nameInput, true);
                isValid = false;
            } else {
                showError(nameInput, false);
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                showError(emailInput, true);
                isValid = false;
            } else {
                showError(emailInput, false);
            }

            if (messageInput.value.trim().length < 10) {
                showError(messageInput, true);
                isValid = false;
            } else {
                showError(messageInput, false);
            }

            if (isValid) {
                alertBox.className = "p-4 rounded-xl text-sm mb-4 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30";
                alertBox.textContent = "Thank you! Your message has been sent successfully.";
                alertBox.classList.remove('hidden');
                contactForm.reset();

                setTimeout(() => alertBox.classList.add('hidden'), 5000);
            }
        });

        function showError(inputElement, show) {
            const errorMsg = inputElement.nextElementSibling;
            if (show) {
                inputElement.classList.add('border-red-500');
                if (errorMsg) errorMsg.classList.remove('hidden');
            } else {
                inputElement.classList.remove('border-red-500');
                if (errorMsg) errorMsg.classList.add('hidden');
            }
        }

        // Initialization & Event Listeners
        window.addEventListener('DOMContentLoaded', () => {
            typeEffect();
            renderSkills('frontend');
            renderProjects('all');

            // Skill Tab Clicks
            document.querySelectorAll('.skill-tab').forEach(tab => {
                tab.addEventListener('click', (e) => {
                    document.querySelectorAll('.skill-tab').forEach(t => {
                        t.classList.remove('bg-brand-600', 'text-white');
                        t.classList.add('text-gray-400');
                    });
                    e.target.classList.add('bg-brand-600', 'text-white');
                    e.target.classList.remove('text-gray-400');
                    renderSkills(e.target.dataset.category);
                });
            });

            // Project Filter Clicks
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    document.querySelectorAll('.filter-btn').forEach(b => {
                        b.classList.remove('bg-brand-600', 'text-white');
                        b.classList.add('text-gray-400');
                    });
                    e.target.classList.add('bg-brand-600', 'text-white');
                    e.target.classList.remove('text-gray-400');
                    renderProjects(e.target.dataset.filter);
                });
            });

            // Mobile Navigation Toggle
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            mobileBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            document.querySelectorAll('.mobile-link').forEach(link => {
                link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
            });

            // Modal Close Listeners
            document.getElementById('close-modal').addEventListener('click', closeModal);
            document.getElementById('project-modal').addEventListener('click', (e) => {
                if (e.target.id === 'project-modal') closeModal();
            });
        });