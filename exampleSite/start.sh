#!/bin/bash
# 本地快速启动脚本
# Quick start in local.

next() {
    cat << EOT
========================================
  ███╗   ██╗███████╗██╗  ██╗████████╗
  ████╗  ██║██╔════╝╚██╗██╔╝╚══██╔══╝
  ██╔██╗ ██║█████╗   ╚███╔╝    ██║
  ██║╚██╗██║██╔══╝   ██╔██╗    ██║
  ██║ ╚████║███████╗██╔╝ ██╗   ██║
  ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝   ╚═╝
========================================
Hugo NexT version $1
Documentation: https://hugo-next.eu.org
========================================
EOT
}

next `cat ../VERSION`

hugo server -D -t ../.. --port 1414 --panicOnWarning --config config.dev.yaml
