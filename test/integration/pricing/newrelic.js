/*
 * Copyright 2020 New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict'

exports.config = {
  app_name: ['My Application'],
  license_key: 'license key here',
  logging: {
    level: 'trace',
    filepath: '../../newrelic_agent.log'
  },
  utilization: {
    detect_aws: true,
    detect_pcf: true,
    detect_azure: true,
    detect_gcp: true,
    detect_docker: true
  },
  transaction_tracer: {
    enabled: true
  }
}
