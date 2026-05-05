Add-Type -AssemblyName System.Drawing

$path1 = "c:\Users\Adrija\OneDrive\Desktop\RUBIX CUBE\assets\assest-start-option.png"
$out1 = "c:\Users\Adrija\OneDrive\Desktop\RUBIX CUBE\assets\start-transparent.png"

$img1 = [System.Drawing.Image]::FromFile($path1)
$bmp1 = new-object System.Drawing.Bitmap($img1)
$bmp1.MakeTransparent([System.Drawing.Color]::White)
$bmp1.Save($out1, [System.Drawing.Imaging.ImageFormat]::Png)
$img1.Dispose()
$bmp1.Dispose()

$path2 = "c:\Users\Adrija\OneDrive\Desktop\RUBIX CUBE\assets\Puase-assest-button.png"
$out2 = "c:\Users\Adrija\OneDrive\Desktop\RUBIX CUBE\assets\pause-transparent.png"

$img2 = [System.Drawing.Image]::FromFile($path2)
$bmp2 = new-object System.Drawing.Bitmap($img2)
$bmp2.MakeTransparent([System.Drawing.Color]::White)
$bmp2.Save($out2, [System.Drawing.Imaging.ImageFormat]::Png)
$img2.Dispose()
$bmp2.Dispose()

Write-Host "Done"
