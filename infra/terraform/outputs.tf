# Firebase Web App設定の出力
output "firebase_web_app_config" {
  description = "Firebase Web Appの設定情報"
  value = {
    api_key             = google_firebase_web_app_config.default.api_key
    auth_domain         = "${var.project_id}.firebaseapp.com"
    project_id          = var.project_id
    storage_bucket      = "${var.project_id}.appspot.com"
    messaging_sender_id = google_firebase_web_app_config.default.messaging_sender_id
    app_id              = google_firebase_web_app.default.app_id
    measurement_id      = google_firebase_web_app_config.default.measurement_id
  }
  sensitive = true
}

# Firebase Web App IDの出力
output "firebase_web_app_id" {
  description = "Firebase Web App ID"
  value       = google_firebase_web_app.default.app_id
}

# Google Cloud Projectの出力
output "google_cloud_project_id" {
  description = "Google Cloud Project ID"
  value       = var.project_id
}
