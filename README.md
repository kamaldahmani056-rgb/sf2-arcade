# SF2 Arcade - محرك ألعاب بسيط

مشروع أندرويد نظيف وبسيط لمحرك ألعاب آركيد.

---

## 🚀 الطريقة الأسهل: بناء APK عبر GitHub (مجاني!)

### الخطوات:

1. **أنشئ حساب GitHub** (إلى ما عندكش): https://github.com

2. **أنشئ Repository جديد**:
   - اضغط "New Repository"
   - سميه `sf2-arcade`
   - اختار Public

3. **ارفع الملفات**:
   - اضغط "Upload files"
   - ارفع كل محتوى هاد المجلد
   - اضغط "Commit changes"

4. **شغّل البناء**:
   - اضغط على "Actions"
   - اضغط "Build APK"
   - اضغط "Run workflow"

5. **حمّل الـ APK**:
   - تسنى دقيقتين
   - اضغط على الـ workflow اللي كمل
   - حمّل "SF2-Arcade-APK"

---

## 📋 كيفية الاستعمال

### الطريقة 1: مشروع جديد (الأفضل)

1. **افتح Android Studio**
2. اختار **"Open"** (مش New Project)
3. اختار مجلد `arcade-engine-v2`
4. تسنى Gradle Sync يكمل
5. اضغط **Run** ▶️

### الطريقة 2: استبدال فمشروع موجود

1. امسح مجلد `app/src/main` كامل من مشروعك
2. انسخ `app/src/main` من هاد المجلد
3. استبدل `app/build.gradle.kts`
4. Sync Gradle

## 📂 الملفات

```
arcade-engine-v2/
├── app/
│   ├── src/main/
│   │   ├── java/com/arcade/sf2/
│   │   │   └── MainActivity.kt
│   │   ├── res/
│   │   │   ├── layout/activity_main.xml
│   │   │   └── values/
│   │   ├── assets/
│   │   │   ├── index.html
│   │   │   ├── css/game.css
│   │   │   └── js/game.js
│   │   └── AndroidManifest.xml
│   └── build.gradle.kts
├── build.gradle.kts
├── settings.gradle.kts
└── gradle.properties
```

## ✅ مميزات هاد النسخة

- ✅ ملفات `.kts` (Kotlin DSL) متوافقة مع Android Studio الجديد
- ✅ بدون أيقونات مخصصة (يستعمل الافتراضية)
- ✅ Java 11 (متوافق أكثر)
- ✅ Gradle 8.5
- ✅ كود بسيط ونظيف
- ✅ تحكم باللمس للألعاب القتالية

## 🎮 التحكم

- D-Pad: الاتجاهات
- LP/MP/HP: اللكمات
- LK/MK/HK: الركلات  
- COIN: عملة
- START: بدء
