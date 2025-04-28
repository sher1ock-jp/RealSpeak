terraform {
  cloud {
    organization = "sher1ock"
    workspaces {
      name = "realspeak-${var.environment}"
    }
  }
}
