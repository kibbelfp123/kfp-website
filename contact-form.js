document.querySelectorAll('[data-contact-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const interests = formData.getAll('interest');
    const body = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Phone: ${formData.get('phone') || 'Not provided'}`,
      `Interested in: ${interests.length ? interests.join(', ') : 'Not specified'}`,
      '',
      'Message:',
      formData.get('message')
    ].join('\n');
    const mailto = new URL('mailto:steven@kibbelfp.com');
    mailto.searchParams.set('subject', formData.get('subject'));
    mailto.searchParams.set('body', body);
    window.location.href = mailto.toString();
  });
});