if [ "$1" == "nocontainer" ]; then
  echo "Starting new container.."
else
  echo "Restarting container.."
  docker stop baybars1223/sysarcio:latest && docker rm baybars1223/sysarcio:latest
fi
docker pull baybars1223/sysarcio:latest && docker run --env-file .env -p 80:80 baybars1223/sysarcio:latest