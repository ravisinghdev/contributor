"use client";

import React, { useState } from "react";

import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { Bell, CheckCircle, XCircle } from "lucide-react";
import { NotificationIcon } from "@/components/icons";

const notifications = [
	{
		id: 1,
		user: "John Doe",
		avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
		message: "Commented on your post",
		time: "2h ago",
		type: "comment",
	},
	{
		id: 2,
		user: "Jane Smith",
		avatar: "https://i.pravatar.cc/150?u=a04258114e29026024d",
		message: "Liked your photo",
		time: "4h ago",
		type: "like",
	},
	{
		id: 3,
		user: "Mike Johnson",
		avatar: "https://i.pravatar.cc/150?u=a04258114e29026704d",
		message: "Sent you a friend request",
		time: "1d ago",
		type: "request",
	},
];

const NotificationPopover = () => {
	const [notifs, setNotifs] = useState(notifications);

	const markAllAsRead = () => {
		setNotifs([]);
	};

	return (
		<Popover showArrow placement="bottom-end">
			<PopoverTrigger>
				<Button isIconOnly variant="light" radius="full">
					<NotificationIcon />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="p-3 w-80 bg-default-50 shadow-lg rounded-xl">
				<Card className="bg-transparent shadow-none">
					<CardHeader className="flex justify-between items-center text-default-900">
						<h4 className="text-medium font-semibold">Notifications</h4>
						<Button
							size="sm"
							variant="light"
							onPress={markAllAsRead}
							className="text-default-500 hover:text-default-900"
						>
							Mark all as read
						</Button>
					</CardHeader>
					<CardBody className="max-h-60 overflow-y-auto space-y-3">
						{notifs.length > 0 ? (
							notifs.map((notif) => (
								<div
									key={notif.id}
									className="flex gap-3 items-center p-2 rounded-lg hover:bg-default-100 cursor-pointer"
								>
									<Avatar src={notif.avatar} size="sm" radius="full" />
									<div className="flex flex-col">
										<p className="text-small text-default-700">
											<span className="font-semibold">{notif.user}</span>{" "}
											{notif.message}
										</p>
										<p className="text-xs text-default-500">{notif.time}</p>
									</div>
								</div>
							))
						) : (
							<p className="text-center text-default-500">
								No new notifications
							</p>
						)}
					</CardBody>
					{notifs.length > 0 && (
						<CardFooter className="text-center">
							<Button size="sm" variant="bordered" onPress={markAllAsRead}>
								Clear All
							</Button>
						</CardFooter>
					)}
				</Card>
			</PopoverContent>
		</Popover>
	);
};

export default NotificationPopover;
