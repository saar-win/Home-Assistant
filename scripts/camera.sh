#!/bin/bash
exec &>> "scripts/camera_shell_script.log"
echo "token is: $1"
cam_token=$1
folder="/backup/records"
id=$(date +"%d-%m-%y___%H-%M")
http_url="http://192.168.1.19:8123/api/camera_proxy_stream/camera.bedroom?token=$1"
ffmpeg -r 10 -i $http_url -t 15 -an -c:v libx264 -crf 26 -vf scale=640:-1 -pix_fmt yuv420p $folder/$id.mp4 -y

# mkdir $folder
# echo $id
# ffmpeg -i $http_url -t 10 -vcodec copy $folder/666_camera.avi -y
# ls -lh $folder/$id.avi $folder/_666_camera.avi
# cp $folder/$id.avi $folder/_666_camera.avi
# ls -lh $folder/$id.avi $folder/_666_camera.avi
# find $folder -type f -name ‘*.avi’ -mtime +10 -exec rm -f {} \;

# http://192.168.0.19:8123/api/camera_proxy_stream/camera.666_camera?token=1bc27aef224526e2b4d2e7210bec8a3745869d603bfb33f7571503b831e458ea

