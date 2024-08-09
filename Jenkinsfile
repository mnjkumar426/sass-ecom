pipeline {
    agent any
tools {
        nodejs "nodejs"  
    }
    stages {
        stage('Checkout') {
          
                 steps {
                        git branch: 'main', url: 'https://github.com/mnjkumar426/sass-ecom.git'
                    }
               
        }
        stage('Build') {
            steps {
                sh 'pnpm install'
                sh 'pnpm lint-staged'
            }
        }

        stage('Sonar Scan') {
            steps {
                script {
                    def scannerHome = tool 'sonar' 
                     withSonarQubeEnv('sonar') { 
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
            
        }

        stage('Quality Gate') {
            steps {
                script {
                   
                    def qg = waitForQualityGate()
                    if (qg.status != 'OK') {
                        error "Pipeline aborted due to quality gate failure: ${qg.status}"
                    }
                }
            }
        }
        
     }
        
    }

