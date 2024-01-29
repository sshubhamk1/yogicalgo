FROM nginx:alpine
WORKDIR /frontend
COPY ./build/ .
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 1430:80