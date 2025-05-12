import React from 'react'


// Sub-components
const ProfilePic = ({ src, alt = "Profile picture", className = "", ...props }) => {
    return (
      <div className={`profile-card-pic ${className}`} {...props}>
        <img src={src} alt={alt} className="profile-img" />
      </div>
    );
  };
  const Title = ({ children, className = "", ...props }) => {
    return (
      <h1 className={`profile-card-name ${className}`} {...props}>
        {children}
      </h1>
    );
  };
  const Description = ({ 
    children, 
    className = "", 
    maxChars = 350, 
    readMoreText = "... Read More", 
    readMoreLink = "#",
    readMoreClassName = "read-more-link",
    showReadMore = true,
    ...props 
  }) => {
    const text = typeof children === 'string' ? children : '';
    const isTruncated = text.length > maxChars;
    
    return (
      <div className={`profile-card-description ${className}`} {...props}>
        {isTruncated ? (
          <>
            {text.substring(0, maxChars)} ...
          </>
        ) : (
          children
        )}
      </div>
    );
  };
// Main component
const ProfileCard = ({ data, children, className = "", ...props }) => {
    return (
      <div className={`profile-card ${className}`} {...props}>
        {data && <p>{data}</p>}
        {children}
      </div>
    );
  };
ProfileCard.ProfilePic = ProfilePic
ProfileCard.Title = Title
ProfileCard.Description = Description
export default ProfileCard;