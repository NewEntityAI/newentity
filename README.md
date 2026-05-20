# newentity™

A New Entity™ allows you to setup a local-first to production pipeline for agentic websites.

I/O environment support provides developers of all skill levels with an open source and performant starting point to handle interactions from site visitors on both local machines and in production environments.

## About the package

The newentity™ package allows you to setup a complex i/o environment for any website by changing 8 variables.

The environment binds a CDN, HOST, and Instance Attributes such as a verified ID/key to incoming and outgoing user traffic to prepare any website for agentic interactions.

## Setting up the instance

You can change the following categories to enable a newentity.js instance:

* 1.) const HOST = "<YOUR_SITE_HERE>";
	* example: "www.core.host";
* 2.) const presetAnchorLocalDomain = "<YOUR_LOCAL_IP_HERE>";
	* example: "127.0.0.1"
* 3.) const rootLocal = "<YOUR_NEW_ENTITY_ROOT_HERE>";
	* example: "/srv/http/NEWENTITY"
* 4.) const idInstance = "<YOUR_INSTANCE_ID_HERE>";
	* example: "HNLEHHNLPSHE28"
* 5.) const HOST_LOCAL_CDN_PORT = ":<YOUR_LOCAL_CDN_PORT_HERE>";
	* example: ":6980"
* 6.) const NEWENTITY = "<YOUR_NEWENTITY_HOST_HERE>";
	* example: "www.core.host"
* 7.) const CDN = "<YOUR_ASSET_PUBLIC_LOCATION_HERE>";
	* example: "asset.core.host"
* 8.) const keyCDN = "/<YOUR_CDN_KEY_HERE>";
	* example: "/D11B9HBYTLHN"

Media/Asset files are not provided by default, so you will need to change them to locations that match files you have available for use.
