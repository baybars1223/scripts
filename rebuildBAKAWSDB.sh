
if [ "$1" == "nocontainer" ]; then
  echo "Starting new container.."
else
  echo "Restarting container.."
  docker stop sysarcioServer && docker rm sysarcioServer && docker image prune && docker system prune -a -f
fi
ls -all && cat .env && docker pull baybars1223/sysarcio:latest && docker run --env-file .env -p 80:80 --name sysarcioServer -d --network=sysarcio baybars1223/sysarcio:latest
