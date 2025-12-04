class UIComponent {

  /**
   * Renders a user profile card
   * @param {Object} user - User data
   * @returns {Object} Component representation
   */
  static renderUserCard(user) {
    return {
      type: 'card',
      className: 'user-card',
      children: [
        {
          type: 'header',
          className: 'user-card-header',
          children: [
            {
              type: 'h2',
              text: user.name
            },
            {
              type: 'span',
              className: 'user-role',
              text: user.role || 'Member'
            }
          ]
        },
        {
          type: 'body',
          className: 'user-card-body',
          children: [
            {
              type: 'p',
              children: [
                { type: 'strong', text: 'Email: ' },
                { type: 'span', text: user.email }
              ]
            },
            {
              type: 'p',
              children: [
                { type: 'strong', text: 'Joined: ' },
                { type: 'span', text: user.joinDate }
              ]
            }
          ]
        }
      ]
    };
  }
}

module.exports = UIComponent;
