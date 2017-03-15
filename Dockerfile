FROM docker-registry.xlab.si/idea-base:latest
RUN apk update && apk add git nodejs supervisor
ADD . /service
WORKDIR /service
RUN npm install && npm install -g y-brackets-server@0.5.11
EXPOSE 8090
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

ENV SERVICE_NAME=mt-brackets
ENV SERVICE_TAGS=microtool,mt,brackets,nodejs
ENTRYPOINT ["/usr/bin/supervisord","-c","/etc/supervisor/conf.d/supervisord.conf"]
