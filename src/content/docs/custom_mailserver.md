---
layout: ../../layouts/Article.astro
title: E-Mail Versand mit eigener Domain
lead: Automatische E-Mails aus HeimV über eigenen Mailserver verschicken
featured: true
---

Standardmässig werden die E-Mails aus HeimV über die allgemeine Adresse «no-reply@heimv.ch» versendet. Wenn Mieter jedoch eine Antwort an diese Adresse schicken, **landet sie nicht automatisch im eigenen Posteingang**. Es kann eine Weiterleitung beantragt werden, dafüf wird dann aber eine eigener E-Mail Account «organisation@app.heimv.ch». 

Es kann auch ein eigener Mailserver über `SMTP` angebunden werden. 

## Hostpoint, Cyon, GMX & Co.

Die Konfiguration ist vom jeweiligen Mailprovider abhängig und funktioniert gleich, wie wenn man bei sich auf dem Computer ein Mailprogramm wie Outlook oder Thunderbird einrichtet. Wende dich für die Integration in HeimV an Filou.

## Gmail und Google Workspaces

Gmail und Google Workspaces unterstützt nur noch das Login-Verfahren `XOAUTH2`, um E-Mails via `SMTP` zu verschicken. Die Einrichtung dafür ist leider nicht ganz so trivial. Details dazu in der [Dokumentation von Google](https://developers.google.com/workspace/gmail/imap/xoauth2-protocol)

#### 1. Google Cloud Projekt erstellen

- Gehe zu: https://console.cloud.google.com/
- Erstelle ein neues Projekt mit dem Namen «HeimV»

#### 2. Gmail API aktivieren

- Gehe zu: **APIs & Dienste > Bibliothek**
- Suche nach «Gmail API»
- Klicke auf «Aktivieren»
  ![](/articles/custom_mailserver/enable-gmail-api.png)


#### 3. OAuth consent screen einrichten

- Gehe zu: **APIs & Dienste > OAuth-Zustimmungsbildschirm**
  ![](/articles/custom_mailserver/enabled-gmail-api.png)
- Fülle die erforderlichen Felder aus:
  - App-Name: **HeimV**
  - Support-E-Mail: **info@heimv.ch**
  - Entwickler-E-Mail: **info@heimv.ch**
  ![](/articles/custom_mailserver/gmail-oauth-consent-1.png)

- Typ: **Intern**
  ![](/articles/custom_mailserver/gmail-oauth-consent-2.png)

- Scopes hinzufügen:
  ![](/articles/custom_mailserver/gmail-oauth-add-scope-1.png)

  - `https://mail.google.com/`
  ![](/articles/custom_mailserver/gmail-oauth-add-scope-2.png)
  
- Speichern und weiter

#### 4. OAuth 2.0-Client-ID erstellen

- Gehe zu: **APIs & Dienste > Anmeldedaten**
- Klicke auf «Anmeldedaten erstellen > OAuth-Client-ID»
  ![](/articles/custom_mailserver/gmail-oauth-create-client-1.png)
- Anwendungstyp: **Webanwendung**
- Name: **HeimV**
- Autorisierte Weiterleitungs-URI hinzufügen:
  - `https://google.github.io/gmail-oauth2-tools/html/oauth2.dance.html`
- Erstellen 
- Client-ID und Client-Secret notieren und an Filou schicken

#### 5. OAuth Token & Refresh-Token generieren

Mit der [Dokumentation von Google](https://github.com/google/gmail-oauth2-tools/wiki/OAuth2DotPyRunThrough) können dann die Access- und Refresh-Tokens generiert werden. Filou macht das gerne für euch.

- Token generieren:
  ```sh
  $ python oauth2.py --generate_oauth2_token --client_id=<CLIENT_ID> --client_secret=<CLIENT_SECRET>
  ```
