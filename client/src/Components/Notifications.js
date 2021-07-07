import React from "react";
import StyledMenuItem from "../Style/StyledMenuItem";
import { ListItemText, Link } from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";

function Notifications({ notification }) {
  return (
    <div
      className={notification.read ? "notificationRead" : "notificationUnread"}
    >
      <StyledMenuItem>
        <Link href={`/post/${notification.post._id}`}>
          New Post from: {notification.post.author}
        </Link>
        <ListItemText
          primary={notification.post.title}
          secondary={
            <Link href={notification.post.url} target="_blank">
              <LinkIcon />
            </Link>
          }
        />
      </StyledMenuItem>
    </div>
  );
}

export default Notifications;
