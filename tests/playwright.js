module.exports = { helloKancolle };

async function helloKancolle(page, userContext) {
  await page.goto('https://tofuchic.github.io/kancolle/');
  await page.getByRole('button', { name: 'open drawer' }).click();
  await page.getByRole('link', { name: 'かんみのみかん' }).click();
  await page.locator('.MuiBackdrop-root').click();
  await page.getByRole('link', { name: '2022年11月号' }).click();
  await page.getByRole('link', { name: 'ログインしてみかんをレビューしよう' }).click();
  await page.getByRole('button', { name: 'Twitterでログイン' }).click();
  const response1 = await page.waitForNavigation();
  await page.goto(response1._request._initializer.url)
  const response2 = await page.waitForNavigation();
  await page.goto(response2._request._initializer.url)
  await page.getByRole('heading', { name: 'Authorize mikancolle to access your account?' }).click();
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByLabel('Phone, email, or username').click();
  await page.getByLabel('Phone, email, or username').fill(userContext.vars.username);
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Password Reveal password' }).fill(userContext.vars.password);
  await page.getByTestId('LoginForm_Login_Button').click();
  await page.getByRole('button', { name: 'ログアウト' }).click();
}