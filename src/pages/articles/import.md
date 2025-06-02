---
layout: ../../layouts/Article.astro
title: Buchungsdaten Import
lead: Buchungsdaten bequem in HeimV übernehmen
featured: true
---

![](/articles/booking-import.png)

Daten von bestehenden Buchungen können in HeimV übernommen werden. Dazu kann man die 
[CSV-Vorlage herunterladen](/booking_import_template.csv) und mit den Daten befüllen. Siehe Details unter [Verfügbare Spalten](#verfügbare-spalten).

Der Import kann dann über [Buchungen]() » [Neu]() » [Import]() gestartet werden.

## Optionen

- **Import Datei**: CSV Datei im vorgegebenen Format. [Vorlage](/booking_import_template.csv)
- **Hauptmietobjekt**: Hauptmietobjekt, dem die importierten Buchungen zugewiesen werden sollen
- **Headers**: Header-Mapping. Leer lassen, falls die Spaltenüberschriften aus der CSV Datei übernommen werden sollen. Ansonsten eine Kommagetrennte Liste der Spaltenüberschriften in der selben Reihenfolge wie im CSV
- **Initial state**: Standardwert für den Status der importierten Buchungen


## Verfügbare Spalten

<div class='overflow-x-scroll'>

| **Spalte**                    | **Beispiel für Werte** |**Beschreibung** | 
| ----------------------------- | ---------------------------- | --- |
| `booking.ref`                 | *B240112abc*                 |  Referenznummer für die Importierte Buchung | 
| `booking.headcount`           | *12*                         |  Voraussichtliche Anzahl Personen (optional) |
| `booking.tenant_organisation` | *Pfadi Sowieso*              |  Organisation der Mietpartei (optional) |
| `booking.category`            | *camp_scout*                 |  Mietkategorie der Buchung in HeimV. Enweder als ID oder als Schlüssel, falls dieser in der Mietkategorie hinterlegt ist  | 
| `booking.purpose`             | *Ausbildungskurs Pfadi Bern* |  Von der Mietpartei angegebener Mietzweck  (optional) | 
| `booking.email`               | *hans.muster@heimv.local*    |  E-Mail Adresse des Mieters. Beim Import wird der Haken «Automatisch generierte E-Mails aus der Applikation verschicken» entfernt, es werden also keine E-Mails zu importierten	 Buchungen verschickt. Dieses Attribut wird auch dazu verwendet, Mieterduplikate zu vermeiden |
| `booking.occupiable_ids`      | *7,8,10*                     |  IDs der Mietobjekte, mit Komma getrennt (optional) |
| `booking.remarks`             | *Küche reist separat an*     | Bemerkung vom Mieter, sichtbar auch für die Mietpartei  (optional) |
| `booking.internal_remarks`    | *Vetrag am 1.1. zugestellt*  | Interne Bemerkungen, Abmachungen, usw. (optional) |
| `booking.begins_at`           | *31.12.2024 23:50* oder *2024-12-31T23:59* | Datum und Uhrzeit des Beginns der Buchung, bevorzugt im [ISO8601-Format](https://www.w3.org/TR/NOTE-datetime) |
| `booking.begins_at_date`      | *31.12.2024* oder *2024-12-31*             | Datum des Beginns der Buchung, **falls Datum und Uhrzeit in zwei Spalten mitgegeben wird**, bevorzugt im [ISO8601-Format](https://www.w3.org/TR/NOTE-datetime) |
| `booking.begins_at_time`      | *23:59*                                    | Uhrzeit des Beginns der Buchung, **falls Datum und Uhrzeit in zwei Spalten mitgegeben wird** |
| `booking.begins_at`           | *31.12.2024 23:50* oder *2024-12-31T23:59* | Datum und Uhrzeit des Endes der Buchung, bevorzugt im [ISO8601-Format](https://www.w3.org/TR/NOTE-datetime) |
| `booking.begins_at_date`      | *31.12.2024* oder *2024-12-31*             | Datum des Endes der Buchung, **falls Datum und Uhrzeit in zwei Spalten mitgegeben wird**, bevorzugt im [ISO8601-Format](https://www.w3.org/TR/NOTE-datetime) |
| `booking.begins_at_time`      | *23:59*                                    | Uhrzeit des Endes der Buchung, **falls Datum und Uhrzeit in zwei Spalten mitgegeben wird** |
| `booking.occupancy_type`      | *occupied* (besetzt, Standard), *provisionally_reserved*, *tentative* (provisorisch) *declined_request*, *free* (frei) | Belegungsart, die im Kalender angezeigt wird (optional) |
| `booking.color`               | *#FF1177* | Farbe der Buchung im Kalender, als Hexadezimalwert (optional) |
| `booking.transition_to`       | *unconfirmed_request*, *open_request*, *provisional_request*, *definitive_request* oder *upcoming* | Status der Buchung unmittelbar nach dem Import (empfohlen)  |
| `tenant.first_name`           | *Peter* | Vorname des Mieters (optional) |
| `tenant.last_name`            | *Muster*| Nachname des Mieters (optional) |
| `tenant.name`                 | *Peter Muster* | Vor- und Nachname des Mieters, **falls Vor- und Nachname nicht in zwei Spalten mitgegeben werden kann** (optional) |
| `tenant.phone*`               | *079 000 00 00* | Telefonummer des Mieters (optional) |
| `tenant.street`               | *Bahnhofstrasse 1*| Strasse und Strassennummer des Mieters (optional) |
| `tenant.zipcode`              | *8000* | Postleitzahl des Mieters (optional) |
| `tenant.city`                 | *Bern* | Ort des Mieters (optional) |
| `tenant.country_code`         | *CH* (Standard) | Ländercode des Mieters (optional) |
| `tenant.address_addon`        | | Adresszusatz des Mieters (optional) |
| `booking_question.*`          | | Antworten zu den zustätzlichen Angaben |
| `usage.*`                     | | Verbrauch zu den Tarifen |

</div>
