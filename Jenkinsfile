pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                sh 'cd client/; npm i'

            }
        }
        stage('Run') {
            steps {
                sh 'cd client/; npm run dev'
            }
        }
    }
}
