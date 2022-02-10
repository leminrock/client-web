pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                sh 'npm i'
            }
        }
        stage('Run') {
            steps {
                sh 'cd client/; npm run dev'
            }
        }
    }
}
