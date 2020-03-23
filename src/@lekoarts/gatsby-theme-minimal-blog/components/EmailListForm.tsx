import React, { useState } from 'react';
import * as styles from './EmailListForm.css';

const EmailListForm: React.FunctionComponent<{}> = () => {

  return (
    <form class="EmailListForm" className={styles.EmailListForm}
    action="https://mohamedadil.us19.list-manage.com/subscribe/post?u=80eec59eb329b1c9c00258524&amp;id=95cfe71596" method="post" target="_blank">
      <input placeholder="Email address"name="EMAIL" type="text" />
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default EmailListForm;