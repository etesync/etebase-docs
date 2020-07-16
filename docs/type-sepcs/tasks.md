---
title: Tasks (iCalendar)
---

Calendars store calendar task information using the [iCalendar format](https://en.wikipedia.org/wiki/ICalendar).

The iCalendar format has different versions, and iCalendars of all versions can be stored in this type, but the recommended version is 2.0.

This collection type only supports the `VTODO` iCalendar type (calendar tasks), for events, please refer to the [calendar event specifications](./calendar).

## Collection

### type: `etebase.vtodo`

This is the type indicating it's an iCalendar task collection.


## Item

### type: leave empty

If the type is empty, it indicates a task item. New types may be added in the future.

### name: the UID of the task item

This is exactly the same as the UID inside the task itself, and is used for quick lookup.

### mtime: optional

When was this item last modified. Useful for sorting based on modification time.

### Content

The content of the item is the iCalendar item itself and nothing else.
