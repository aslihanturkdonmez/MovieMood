# Movie Mood

```sh
Find the movie or series you want.
```
<img src="https://user-images.githubusercontent.com/43846857/205517647-4fc9a0e5-98b4-497b-a048-834f48834b4f.png" />

## İndirme ve Test Bağlantısı (Android)
[APK](https://drive.google.com/file/d/1lCivr-B0B1yUahoibgeeOfJaLIPqgyIF/view?usp=sharing)

## İçerik
* [İndirme ve Test Bağlantısı](#i̇ndirme-ve-test-bağlantısı-android)
* [Uygulama Görselleri](#uygulama-görselleri)
* [Uygulama Özellikleri](#uygulama-özellikleri)
* [Gereksinimler](#gereksinimler)
* [Kurulum](#kurulum)
* [Geliştirme Süreci](#geliştirme-süreci)

## Uygulama Görselleri
<img src="https://user-images.githubusercontent.com/43846857/205517641-70fbce23-92e4-4cf1-b6c0-17185f0e9e2f.png" />
<img src="https://user-images.githubusercontent.com/43846857/205517646-64bd2450-1655-4ec1-8797-acc79b112bdc.png" />

## Uygulama Özellikleri
* Discover Page
  * Search
  * Infinite Scroll
  * Recently Viewed (Persist)
  * Pull to refresh
  * Redirect to detail page
  * Progressive Image

* Detail Page
  * View movie properties
  * Expandable View
  * Progressive Image


## Gereksinimler
  ### :arrow_right: iOS
 * [Node](https://nodejs.org/) 
 * [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
 * [CocoaPods](https://cocoapods.org/)

 ### :arrow_right: Android  
 * [Node](https://nodejs.org/)
 * [Java SE Development Kit (JDK)](https://openjdk.java.net/projects/jdk/11/)
 * [Android Studio](https://developer.android.com/studio)

## Kurulum
### :arrow_right: iOS 
Terminal üzerinde
```sh
git clone https://github.com/aslihanturkdonmez/MovieMood.git
cd MovieMood
npm install
cd ios
pod install
cd ..
npx react-native run-ios
```
komutları çalıştırılmalıdır
### :arrow_right: Android 
Terminal üzerinde
```sh
git clone https://github.com/aslihanturkdonmez/MovieMood.git
cd MovieMood
npm install
npx react-native run-android
```
komutları çalıştırılmalıdır

## Geliştirme Süreci
* Geliştirme Ortamı: [React Native](https://reactnative.dev/)
* State Management: [Redux](https://redux.js.org/)
