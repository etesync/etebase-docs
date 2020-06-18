SSH_HOST=docs.etebase.com
SSH_PORT=22
SSH_USER=tom
SSH_TARGET_DIR=sites/docs.etebase.com

OUTPUTDIR=./build

set -e

yarn build

rsync -e "ssh -p ${SSH_PORT}" -P --delete -rvc -zz ${OUTPUTDIR}/ ${SSH_USER}@${SSH_HOST}:${SSH_TARGET_DIR}
