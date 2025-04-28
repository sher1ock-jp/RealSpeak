#!/bin/bash

# Git Hooksのパスを設定
git config core.hooksPath .githooks

# フックスクリプトに実行権限を付与
chmod +x .githooks/pre-push .githooks/pre-checkout

echo "Git Hooksの設定が完了しました。"
echo "これにより、以下の制約が適用されます："
echo "- mainブランチから直接新しいブランチを作成することはできません"
echo "- mainブランチに直接プッシュすることはできません"
echo ""
echo "developブランチを使用して開発を行い、Pull Requestを通じてmainブランチにマージしてください。"
