# Deploy script for deploying to GKE

gcloud components update kubectl

gcloud config set project personal-website-id

gcloud config set compute/zone europe-west4-b

gcloud container clusters get-credentials personal-website-cluster

SHA=$(git rev-parse HEAD)

docker build -t eu.gcr.io/personal-website-id/personal-website:latest -t eu.gcr.io/personal-website-id/personal-website:$SHA .

docker push eu.gcr.io/personal-website-id/personal-website:latest

docker push eu.gcr.io/personal-website-id/personal-website:$SHA

kubectl apply -f ../personal-website-k8s

kubectl set image deployments/personal-website-deployment react=eu.gcr.io/personal-website-id/personal-website:$SHA
