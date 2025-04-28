# RealSpeak - インフラストラクチャ設定
# Google Cloud + Firebase Authentication

# ログイン機能に必要なGoogle APIの有効化
resource "google_project_service" "auth_services" {
  for_each = toset([
    "firebase.googleapis.com",           # Firebase
  ])

  project = var.project_id
  service = each.key

  disable_dependent_services = false
  disable_on_destroy         = false
}
