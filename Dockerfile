FROM ubuntu:latest
LABEL authors="mtg14"

ENTRYPOINT ["top", "-b"]