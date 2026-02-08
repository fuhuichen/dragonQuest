#!/usr/bin/env python3
"""
圖片去背腳本
使用 rembg 庫來移除圖片背景
"""

import os
from pathlib import Path
from rembg import remove
from PIL import Image
import sys

def remove_background(input_path, output_path=None):
    """移除圖片背景"""
    try:
        # 讀取圖片
        with open(input_path, 'rb') as input_file:
            input_data = input_file.read()
        
        # 移除背景
        output_data = remove(input_data)
        
        # 保存結果
        if output_path is None:
            output_path = input_path
        
        with open(output_path, 'wb') as output_file:
            output_file.write(output_data)
        
        print(f"✓ 處理完成: {input_path}")
        return True
    except Exception as e:
        print(f"✗ 處理失敗 {input_path}: {str(e)}")
        return False

def process_directory(directory_path, recursive=False):
    """處理目錄中的所有圖片"""
    directory = Path(directory_path)
    if not directory.exists():
        print(f"錯誤: 目錄不存在 {directory_path}")
        return
    
    # 支持的圖片格式
    image_extensions = {'.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG'}
    
    # 獲取所有圖片文件
    if recursive:
        image_files = [f for f in directory.rglob('*') if f.suffix in image_extensions]
    else:
        image_files = [f for f in directory.iterdir() if f.suffix in image_extensions]
    
    if not image_files:
        print(f"在 {directory_path} 中沒有找到圖片文件")
        return
    
    print(f"找到 {len(image_files)} 個圖片文件，開始處理...")
    
    success_count = 0
    for image_file in image_files:
        if remove_background(str(image_file)):
            success_count += 1
    
    print(f"\n處理完成: {success_count}/{len(image_files)} 個文件成功")

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("使用方法:")
        print("  python3 remove_background.py <圖片路徑或目錄>")
        print("  python3 remove_background.py <目錄> --recursive  # 遞歸處理子目錄")
        print("\n範例:")
        print("  python3 remove_background.py src/assets/enemy/")
        print("  python3 remove_background.py src/assets/enemy/chimera.png")
        sys.exit(1)
    
    target_path = sys.argv[1]
    recursive = '--recursive' in sys.argv or '-r' in sys.argv
    
    path = Path(target_path)
    
    if path.is_file():
        # 處理單個文件
        remove_background(target_path)
    elif path.is_dir():
        # 處理目錄
        process_directory(target_path, recursive)
    else:
        print(f"錯誤: 路徑不存在 {target_path}")
        sys.exit(1)
