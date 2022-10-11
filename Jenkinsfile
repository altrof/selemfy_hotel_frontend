pipeline {
    agent any
    tools {
        nodejs 'NodeJS 16.17.1'
    }
    stages {
        stage('Versions') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }
        stage('Clean Packages Installation') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test:unit'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
