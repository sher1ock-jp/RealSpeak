variable "project_id" {
  description = "Google Cloud プロジェクトID"
  type        = string
}

variable "region" {
  description = "Google Cloud リージョン"
  type        = string
  default     = "asia-northeast1" # 東京リージョン
}

variable "firebase_location_id" {
  description = "Firebase リソースのロケーション"
  type        = string
  default     = "asia-northeast1"
}

variable "app_name" {
  description = "アプリケーション名"
  type        = string
  default     = "realspeak"
}

variable "environment" {
  description = "環境（dev, staging, prod）"
  type        = string
  default     = "dev"
}

variable "google_oauth_client_id" {
  description = "Google OAuth Client ID"
  type        = string
  default     = "" # 実際の値に置き換えてください
}

variable "google_oauth_client_secret" {
  description = "Google OAuth Client Secret"
  type        = string
  default     = "" # 実際の値に置き換えてください
  sensitive   = true
}

variable "credentials" {
  description = "Google Cloud認証情報"
  type        = string
  default     = null
  sensitive   = true
}
