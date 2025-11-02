import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-documentation',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="card">
            <div class="font-semibold text-2xl mb-4">Documentation</div>
            <div class="font-semibold text-xl mb-4">About Log Tools</div>
            <p class="text-lg mb-4">Log Tools is an educational application designed to help developers learn about logging systems. The application consists of an Angular frontend that communicates with a NestJS backend to generate and manage log entries for learning purposes.</p>

            <div class="font-semibold text-xl mb-4">Get Started</div>
            <p class="text-lg mb-4">This application is containerized using Docker for easy setup and deployment. Make sure you have Docker and Docker Compose installed on your system.</p>
            <pre class="app-code">
<code>git clone https://github.com/allisonmachado/log-tools.git
cd log-tools
npm run start</code></pre>

            <p class="text-lg mb-4">The application will be available at <i class="bg-highlight px-2 py-1 rounded-border not-italic text-base">http://localhost/</i> once all containers are running.</p>

            <div class="font-semibold text-xl mb-4">How It Works</div>
            <p class="text-lg mb-4">The frontend provides a simple form where you can create log messages with different severity levels. When you submit a log, it sends a POST request to the backend API, which then logs the message using NestJS's built-in Logger with the specified level.</p>

            <div class="font-semibold text-xl mb-4">Available Log Levels</div>
            <ul class="leading-normal list-disc pl-8 text-lg mb-4">
                <li><span class="text-primary font-medium">Error</span>: For error messages and exceptions</li>
                <li><span class="text-primary font-medium">Warning</span>: For warning messages</li>
                <li><span class="text-primary font-medium">Info</span>: For general information messages</li>
                <li><span class="text-primary font-medium">Debug</span>: For debugging information</li>
                <li><span class="text-primary font-medium">Verbose</span>: For detailed diagnostic information</li>
            </ul>

            <div class="font-semibold text-xl mb-4">Project Structure</div>
            <p class="text-lg mb-4">The project is organized as a monorepo with separate packages for different components:</p>
            <ul class="leading-normal list-disc pl-8 text-lg mb-4">
                <li><span class="text-primary font-medium">packages/frontend</span>: Angular application with PrimeNG UI components</li>
                <li><span class="text-primary font-medium">packages/backend</span>: NestJS API server with logging service</li>
                <li><span class="text-primary font-medium">packages/server</span>: Nginx reverse proxy server</li>
            </ul>

            <div class="font-semibold text-xl mb-4">API Endpoint</div>
            <p class="text-lg mb-4">
                The backend exposes a single POST endpoint at <span class="bg-highlight px-2 py-1 rounded-border not-italic text-base">/api/logs</span> that accepts log records with a message and severity level. 
                The endpoint validates the input and logs the message using the appropriate log level.
            </p>

            <div class="font-semibold text-xl mb-4">Docker Commands</div>
            <p class="text-lg mb-4">The project includes several npm scripts for managing the Docker environment:</p>
            <ul class="leading-normal list-disc pl-8 text-lg mb-4">
                <li><span class="text-primary font-medium">npm run start</span>: Build and start all containers</li>
                <li><span class="text-primary font-medium">npm run start:detached</span>: Start containers in background</li>
                <li><span class="text-primary font-medium">npm run compose:stop</span>: Stop all containers</li>
                <li><span class="text-primary font-medium">npm run clean:all</span>: Remove all containers, volumes, and images</li>
            </ul>

            <div class="font-semibold text-xl mb-4">Learning Objectives</div>
            <p class="text-lg mb-4">This application helps developers understand:</p>
            <ul class="leading-normal list-disc pl-8 text-lg mb-4">
                <li>Different log severity levels and when to use them</li>
                <li>How to implement logging in a NestJS backend application</li>
                <li>Frontend-backend communication for log data</li>
                <li>Docker containerization for development environments</li>
            </ul>
        </div>
    `,
    styles: `
        @media screen and (max-width: 991px) {
            .video-container {
                position: relative;
                width: 100%;
                height: 0;
                padding-bottom: 56.25%;

                iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    `
})
export class Documentation {}
