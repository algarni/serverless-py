FROM python:3.11-slim

# Copy local_dir to container_dir
COPY . /app/
WORKDIR /app/

# default installs
RUN apt-get update
RUN apt-get install -y build-essential
RUN apt-get install -y python3-dev
RUN apt-get install -y python3-setuptools
RUN apt-get install -y gcc
RUN apt-get install -y make

# create a virtualenv
RUN python3 -m venv /opt/venv && \
    /opt/venv/bin/python -m pip install pip --upgrade && \
    /opt/venv/bin/python -m pip install -r /app/src/requirements.txt

# purge unused
RUN apt-get remove -y --purge make gcc build-essential \
    && apt-get autoremove -y \
    && rm -rf /var/lib/opt/lists/*

# make entrypoint executable
RUN chmod +x ./src/entrypoint.sh

# run the app
CMD ["./src/entrypoint.sh"]
