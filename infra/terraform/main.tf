# RealSpeak - インフラストラクチャ設定
# Google Cloud + Firebase Authentication

# ログイン機能に必要なGoogle APIの有効化
resource "google_project_service" "auth_services" {
  for_each = toset([
    "firebase.googleapis.com",           # Firebase
    "identitytoolkit.googleapis.com",    # Identity Platform (Firebase Auth)
  ])

  project = var.project_id
  service = each.key

  disable_dependent_services = false
  disable_on_destroy         = false
}

# CI/CD用のサービスアカウント
resource "google_service_account" "ci_cd" {
  account_id   = "ci-cd-account"
  display_name = "CI/CD Service Account"
  project      = var.project_id
}

# CI/CD用のサービスアカウントにIAMロールを付与
resource "google_project_iam_member" "ci_cd_roles" {
  for_each = toset([
    "roles/firebase.admin",              # Firebase管理（認証含む）
    "roles/iam.serviceAccountUser"       # サービスアカウントとして動作するために必要
  ])

  project = var.project_id
  role    = each.key
  member  = "serviceAccount:${google_service_account.ci_cd.email}"
}

# CI/CD用のサービスアカウントキー
resource "google_service_account_key" "ci_cd" {
  service_account_id = google_service_account.ci_cd.name
}

# CI/CD用のサービスアカウントキーの出力
output "ci_cd_service_account_key" {
  description = "CI/CD用のサービスアカウントキー（Base64エンコード）"
  value       = google_service_account_key.ci_cd.private_key
  sensitive   = true
}
