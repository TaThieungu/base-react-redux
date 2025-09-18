pipeline{
  agent { label 'Jenkins-Agent' }
  tools{
    jdk 'Java17'
    maven 'Maven3'
  }
  stages{
    stage("Clean Workspace"){
      steps{
        cleanws()
      }
    }
    stage("Checkout from SCM"){
      steps {
        git branch: 'master', credentialsId: 'github', url: 'https://github.com/TaThieungu/base-react-redux.git'
            }
        }
    stage("Build Application"){
      steps {
        sh "mvn clean package"
            }
       }
    stage("Test Application"){
      steps {
        sh "mvn test"
           }
       }
  }
  
}
