# Deploy script for deploying to GKE

SHA=$(git rev-parse HEAD)

docker build -t eu.gcr.io/shea-meyers-personal-website/personal-website:latest -t eu.gcr.io/shea-meyers-personal-website/personal-website:$SHA .

docker push eu.gcr.io/shea-meyers-personal-website/personal-website:latest

docker push eu.gcr.io/shea-meyers-personal-website/personal-website:$SHA

kubectl apply -f ../personal-website-k8s

kubectl set image deployments/personal-website-deployment react=eu.gcr.io/shea-meyers-personal-website/personal-website:$SHA
