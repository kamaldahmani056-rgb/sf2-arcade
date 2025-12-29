#!/bin/bash
# Gradle wrapper script

GRADLE_VERSION=8.5
GRADLE_HOME="$HOME/.gradle/wrapper/dists/gradle-$GRADLE_VERSION-bin"

# Download gradle if not exists
if [ ! -d "$GRADLE_HOME" ]; then
    echo "Downloading Gradle $GRADLE_VERSION..."
    mkdir -p "$GRADLE_HOME"
    curl -L -o /tmp/gradle.zip "https://services.gradle.org/distributions/gradle-$GRADLE_VERSION-bin.zip"
    unzip -q /tmp/gradle.zip -d "$GRADLE_HOME"
    rm /tmp/gradle.zip
fi

# Find gradle executable
GRADLE_EXEC=$(find "$GRADLE_HOME" -name "gradle" -type f 2>/dev/null | head -1)

if [ -z "$GRADLE_EXEC" ]; then
    echo "Gradle not found, using system gradle or downloading..."
    if command -v gradle &> /dev/null; then
        gradle "$@"
    else
        echo "Please install Gradle or run: gradle wrapper"
        exit 1
    fi
else
    "$GRADLE_EXEC" "$@"
fi
