project_id = "realspeak-prod"  # 本番環境用プロジェクトID
environment = "prod"
app_name = "realspeak"
region = "asia-northeast1"
firebase_location_id = "asia-northeast1"

# Googleログインを使用する場合は、本番環境用のOAuth認証情報を設定する必要があります
# これらの値はGitHubシークレットとして管理し、CI/CDパイプラインから提供することをお勧めします
# Google Cloud Consoleで本番環境用のOAuth同意画面を設定し、認証情報を取得してください
google_oauth_client_id = ""
google_oauth_client_secret = ""
