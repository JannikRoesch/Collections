  
Create a project based on the provided technical roadmap for developing a scalable, high-performance cross-platform mobile application using Next.js, with an iOS-first focus and full cross-platform functionality. The project should be structured to effectively utilize the information provided in the file. Ensure the project aligns with the file's purpose and objectives, and adheres to the following guidelines:
1.  **Monorepo Architecture**: Implement a monorepo architecture combining Next.js for web and React Native for native mobile development, supported by modern CI/CD pipelines and platform-agnostic tools.
    
2.  **File Structure**: Organize the project with a clear and modular file structure, including shared utilities, business logic, UI components, and configurations.
    
3.  **Initial Setup**:
    
    *   Use Yarn Workspaces for dependency management.
        
    *   Create a Next.js project for the web application.
        
    *   Create React Native projects for iOS and Android.
        
    *   Configure `tsconfig.json` and `metro.config.js` to support the monorepo structure.
        
4.  **iOS-Specific Configuration**:
    
    *   Set up Xcode with the necessary provisioning profiles and capabilities.
        
    *   Configure `Info.plist` for iOS-specific settings.
        
    *   Use Fastlane for automating provisioning profile management.
        
5.  **Cross-Platform Compatibility**:
    
    *   Utilize Next.js for SSR/SSG and web application development.
        
    *   Use React Native for native mobile components.
        
    *   Implement code reusability through shared business logic and conditional rendering.
        
6.  **CI/CD Pipelines**:
    
    *   Set up GitHub Actions workflows for iOS, Android, and web deployments.
        
    *   Use Fastlane for iOS builds and Vercel for web deployments.
        
7.  **Performance Optimization**:
    
    *   Implement code splitting and lazy loading in Next.js.
        
    *   Optimize SSR with caching.
        
    *   Ensure the application meets performance benchmarks, such as a Lighthouse score of ≥90 for PWA.
        
8.  **Additional Features**:
    
    *   Implement offline-first design using AsyncStorage.
        
    *   Ensure accessibility compliance with WCAG 2.1 standards.
        
    *   Integrate Sentry for error tracking.
        
9.  **Deliverables and Success Metrics**:
    
    *   Phase 1: MVP with iOS App Store submission and web deployment with PWA support.
        
    *   Phase 2: Cross-platform expansion with Android APK/IPA builds and desktop ports.
        
    *   Success Metrics: ≥95% shared codebase, within 2 submission cycles for App Store approval, and Lighthouse score of ≥90 for PWA.
        
10.  **References**: Utilize the provided references for guidance on monorepo setup, CI/CD pipelines, and performance optimizations.