"use strict";(self.webpackChunketebase_docs=self.webpackChunketebase_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"someSidebar":[{"type":"link","label":"Introduction","href":"/","docId":"introduction"},{"type":"category","label":"Getting Started","items":[{"type":"link","label":"Installation","href":"/installation","docId":"installation"},{"type":"link","label":"Overview","href":"/overview","docId":"overview"},{"type":"link","label":"Quickstart","href":"/quickstart","docId":"quickstart"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Guides","items":[{"type":"link","label":"Authentication","href":"/guides/basic_authentication","docId":"guides/basic_authentication"},{"type":"link","label":"Using Collections","href":"/guides/using_collections","docId":"guides/using_collections"},{"type":"link","label":"Using Items","href":"/guides/using_items","docId":"guides/using_items"},{"type":"link","label":"Collection Sharing","href":"/guides/collection_sharing","docId":"guides/collection_sharing"},{"type":"link","label":"Revision history","href":"/guides/revisions","docId":"guides/revisions"},{"type":"link","label":"Local Cache","href":"/guides/local_cache","docId":"guides/local_cache"}],"collapsed":true,"collapsible":true},{"type":"category","label":"API Reference","items":[{"type":"link","label":"Utilities","href":"/api/utilities","docId":"api/utilities"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Type Specifications","items":[{"type":"link","label":"Introduction","href":"/type-specs/introduction","docId":"type-specs/introduction"},{"type":"link","label":"Address Book (vCard)","href":"/type-specs/address-book","docId":"type-specs/address-book"},{"type":"link","label":"Calendar (iCalendar)","href":"/type-specs/calendar","docId":"type-specs/calendar"},{"type":"link","label":"Tasks (iCalendar)","href":"/type-specs/tasks","docId":"type-specs/tasks"},{"type":"link","label":"Notes (Markdown)","href":"/type-specs/notes","docId":"type-specs/notes"}],"collapsed":true,"collapsible":true},{"type":"category","label":"Protocol Specifications","items":[{"type":"link","label":"Introduction","href":"/protocol-specs/introduction","docId":"protocol-specs/introduction"},{"type":"link","label":"Authentication","href":"/protocol-specs/authentication","docId":"protocol-specs/authentication"},{"type":"link","label":"Fetching Data","href":"/protocol-specs/fetching-data","docId":"protocol-specs/fetching-data"},{"type":"link","label":"Collections","href":"/protocol-specs/collections","docId":"protocol-specs/collections"},{"type":"link","label":"Items","href":"/protocol-specs/items","docId":"protocol-specs/items"},{"type":"link","label":"Invitations","href":"/protocol-specs/invitations","docId":"protocol-specs/invitations"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Get Help & Chat With Us","href":"/get-help","docId":"get-help"}]},"docs":{"api/utilities":{"id":"api/utilities","title":"Utilities","description":"In addition to the main API, Etebase provides a few utility functions to make development easier.","sidebar":"someSidebar"},"get-help":{"id":"get-help","title":"Get Help & Chat With Us","description":"We love chatting with developers!","sidebar":"someSidebar"},"guides/basic_authentication":{"id":"guides/basic_authentication","title":"Authentication","description":"Etebase automatically takes care of the encryption for you, securely deriving an encryption key from the user password. It then also creates an asymmetric keypair to login so the password never leaves the user\'s device.","sidebar":"someSidebar"},"guides/collection_sharing":{"id":"guides/collection_sharing","title":"Collection Sharing","description":"In the future we will have more ways to share collections among users (e.g: PAKE), but until we do, the only way to share is using public-key cryptography which is what this section is about.","sidebar":"someSidebar"},"guides/local_cache":{"id":"guides/local_cache","title":"Local Cache","description":"At this point you should already know how to create, edit, list and delete data from Etebase.","sidebar":"someSidebar"},"guides/revisions":{"id":"guides/revisions","title":"Revision history","description":"Every time you change a collection or an item, a new revision is created in Etebase. Each revision is a snapshot of the collection or item at that point in time so you can easily view and rollback changes.","sidebar":"someSidebar"},"guides/using_collections":{"id":"guides/using_collections","title":"Using Collections","description":"This section assumes you have already read the overview and understand what collections are and what they are for.","sidebar":"someSidebar"},"guides/using_items":{"id":"guides/using_items","title":"Using Items","description":"This section assumes you have already read the overview and understand what collections and items are and what each are for.","sidebar":"someSidebar"},"installation":{"id":"installation","title":"Installation","description":"Adding the Etebase dependency","sidebar":"someSidebar"},"introduction":{"id":"introduction","title":"Introduction","description":"What is it?","sidebar":"someSidebar"},"overview":{"id":"overview","title":"Overview","description":"Etebase makes building end-to-end encrypted applications easy by taking care of the encryption and its related challenges. That\'s why you would rarely if ever see any mention of encryption of the API. Everything is taken care of by Etebase.","sidebar":"someSidebar"},"protocol-specs/authentication":{"id":"protocol-specs/authentication","title":"Authentication","description":"Etebase uses a challenge-response zero-knowledge proof for authentication. The client asks the server for an authentication challenge using the authentication/loginchallenge/ HTTP endpoint, and then responds with a signed message to prove it posses the authentication private key.","sidebar":"someSidebar"},"protocol-specs/collections":{"id":"protocol-specs/collections","title":"Collections","description":"As explained in the overview, collections are a collection of items. Collection objects are internally just items with additional data that is specific to each member (user) of a collection. Items and collection memberships will be covered in the next chapters. This chapter will focus on how they interact, and collection specific properties.","sidebar":"someSidebar"},"protocol-specs/fetching-data":{"id":"protocol-specs/fetching-data","title":"Fetching Data","description":"There are a lot of common patterns throughout the Etebase API. This document defines some of the common concepts that used in the following sections.","sidebar":"someSidebar"},"protocol-specs/introduction":{"id":"protocol-specs/introduction","title":"Introduction","description":"This document is meant as an overview for people interested in how the Etebase works behind the scenes and is not required reading for normal usage.","sidebar":"someSidebar"},"protocol-specs/invitations":{"id":"protocol-specs/invitations","title":"Invitations","description":"TBD","sidebar":"someSidebar"},"protocol-specs/items":{"id":"protocol-specs/items","title":"Items","description":"TBD","sidebar":"someSidebar"},"quickstart":{"id":"quickstart","title":"Quickstart","description":"To start using Etebase you first need a server to connect to. The easiest way to do it is to signup for a developer account and get your developer server URL from the dashboard.","sidebar":"someSidebar"},"type-specs/address-book":{"id":"type-specs/address-book","title":"Address Book (vCard)","description":"Address books store contact information using the vCard format.","sidebar":"someSidebar"},"type-specs/calendar":{"id":"type-specs/calendar","title":"Calendar (iCalendar)","description":"Calendars store calendar event information using the iCalendar format.","sidebar":"someSidebar"},"type-specs/introduction":{"id":"type-specs/introduction","title":"Introduction","description":"As explained in the overview, collections have types, and these types indicate what the content of the collection is and how it should be handled.","sidebar":"someSidebar"},"type-specs/notes":{"id":"type-specs/notes","title":"Notes (Markdown)","description":"Note collections store their data in Markdown.","sidebar":"someSidebar"},"type-specs/tasks":{"id":"type-specs/tasks","title":"Tasks (iCalendar)","description":"Calendars store calendar task information using the iCalendar format.","sidebar":"someSidebar"}}}')}}]);