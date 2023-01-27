export function fetchProfileData() {
  return Promise.all([fetchUser(), fetchPosts()]).then(([user, posts]) => {
    return { user, posts };
  });
}

function fetchUser(): Promise<{ name: string }> {
  console.log('fetch user...');
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fetched user');
      resolve({
        name: 'Ringo Starr',
      });
    }, 1000);
  });
}

function fetchPosts(): Promise<{ id: number; text: string }[]> {
  console.log('fetch posts...');
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('fetched posts');
      resolve([
        {
          id: 0,
          text: 'I get by with a little help from my friends',
        },
        {
          id: 1,
          text: "I'd like to be under the sea in an octupus's garden",
        },
        {
          id: 2,
          text: 'You got that sand all over your feet',
        },
      ]);
    }, 2000);
  });
}
