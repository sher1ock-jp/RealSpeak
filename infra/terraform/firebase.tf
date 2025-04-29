# Firebase Authentication（Identity Platform）の有効化
resource "google_project_service" "identity_platform" {
  project = var.project_id
  service = "identitytoolkit.googleapis.com"

  disable_dependent_services = true
  disable_on_destroy         = false
}

# Firebase Projectの設定
resource "google_firebase_project" "default" {
  provider = google-beta
  project  = var.project_id

  depends_on = [
    google_project_service.identity_platform
  ]
}

# Firebase Web Appの設定
resource "google_firebase_web_app" "default" {
  provider     = google-beta
  project      = var.project_id
  display_name = "${var.app_name}-${var.environment}"

  depends_on = [
    google_firebase_project.default
  ]
}

# Identity Platform設定（Firebase Authentication）
resource "google_identity_platform_config" "default" {
  provider = google-beta
  project  = var.project_id

  # 匿名ユーザーの自動削除設定
  autodelete_anonymous_users = true

  # 認証ドメインの設定
  # 本番環境では実際のドメインに変更
  # ローカル開発用にlocalhostを追加
  authorized_domains = [
    "localhost",
    # Firebase Hostingは使用しないため、Vercelのドメインを設定
    "${var.app_name}-${var.environment}.vercel.app",
    "real-speak-git-develop-sher1ocks-projects.vercel.app"
  ]

  # メール/パスワード認証の有効化
  sign_in {
    allow_duplicate_emails = false
    
    email {
      enabled           = true
      password_required = true
    }
  }

  depends_on = [
    google_project_service.identity_platform
  ]
}

# Google認証プロバイダーの設定（デフォルトサポートIDP）
resource "google_identity_platform_default_supported_idp_config" "google" {
  provider      = google-beta
  project       = var.project_id
  idp_id        = "google.com"
  client_id     = var.google_oauth_client_id
  client_secret = var.google_oauth_client_secret
  enabled       = true

  depends_on = [
    google_identity_platform_config.default
  ]
}

# Firebase Web App設定の取得（データソース）
data "google_firebase_web_app_config" "default" {
  provider   = google-beta
  project    = var.project_id
  web_app_id = google_firebase_web_app.default.app_id
}
