#!/usr/bin/env python3
"""
圖片去背工具：將白底圖片轉換為透明背景
"""

import os
from PIL import Image
import sys

def remove_white_background(input_path, output_path, threshold=240):
    """
    移除圖片中的白色背景，轉換為透明
    
    Args:
        input_path: 輸入圖片路徑
        output_path: 輸出圖片路徑
        threshold: 白色閾值 (0-255)，預設240，數值越高越寬鬆
    """
    try:
        # 打開圖片
        img = Image.open(input_path)
        
        # 轉換為RGBA模式（如果還沒有）
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
        
        # 獲取圖片數據
        data = img.getdata()
        
        # 創建新的像素數據
        new_data = []
        for item in data:
            # 檢查是否為白色（RGB值都接近255）
            # 使用閾值來判斷，允許一些容差
            if item[0] >= threshold and item[1] >= threshold and item[2] >= threshold:
                # 設為透明
                new_data.append((255, 255, 255, 0))
            else:
                # 保持原樣
                new_data.append(item)
        
        # 更新圖片數據
        img.putdata(new_data)
        
        # 保存圖片
        img.save(output_path, 'PNG')
        print(f"✓ 處理完成: {os.path.basename(input_path)} -> {os.path.basename(output_path)}")
        return True
        
    except Exception as e:
        print(f"✗ 處理失敗 {os.path.basename(input_path)}: {str(e)}")
        return False

def process_directory(input_dir, output_dir, threshold=240):
    """
    處理目錄中的所有圖片
    
    Args:
        input_dir: 輸入目錄路徑
        output_dir: 輸出目錄路徑
        threshold: 白色閾值
    """
    # 創建輸出目錄（如果不存在）
    os.makedirs(output_dir, exist_ok=True)
    
    # 支持的圖片格式
    supported_formats = ('.png', '.jpg', '.jpeg', '.PNG', '.JPG', '.JPEG')
    
    # 獲取所有圖片文件
    image_files = [f for f in os.listdir(input_dir) 
                   if f.lower().endswith(supported_formats)]
    
    if not image_files:
        print(f"在 {input_dir} 中沒有找到圖片文件")
        return
    
    print(f"找到 {len(image_files)} 個圖片文件")
    print(f"開始處理...\n")
    
    success_count = 0
    for filename in image_files:
        input_path = os.path.join(input_dir, filename)
        # 保持原檔名，但確保是PNG格式
        base_name = os.path.splitext(filename)[0]
        output_path = os.path.join(output_dir, f"{base_name}.png")
        
        if remove_white_background(input_path, output_path, threshold):
            success_count += 1
    
    print(f"\n處理完成！成功: {success_count}/{len(image_files)}")

if __name__ == "__main__":
    # 設定路徑
    script_dir = os.path.dirname(os.path.abspath(__file__))
    input_dir = os.path.join(script_dir, "src", "assets", "temp")
    output_dir = os.path.join(script_dir, "src", "assets", "temp_processed")
    
    # 檢查輸入目錄是否存在
    if not os.path.exists(input_dir):
        print(f"錯誤：輸入目錄不存在: {input_dir}")
        sys.exit(1)
    
    # 可選：從命令行參數獲取閾值
    threshold = 240
    if len(sys.argv) > 1:
        try:
            threshold = int(sys.argv[1])
            if not 0 <= threshold <= 255:
                print("警告：閾值應在 0-255 之間，使用預設值 240")
                threshold = 240
        except ValueError:
            print("警告：無效的閾值參數，使用預設值 240")
    
    print("=" * 50)
    print("圖片去背工具")
    print("=" * 50)
    print(f"輸入目錄: {input_dir}")
    print(f"輸出目錄: {output_dir}")
    print(f"白色閾值: {threshold} (數值越高越寬鬆)")
    print("=" * 50)
    print()
    
    # 處理圖片
    process_directory(input_dir, output_dir, threshold)
    
    print(f"\n處理後的圖片已保存到: {output_dir}")

