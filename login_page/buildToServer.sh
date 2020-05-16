echo "Building login page and copying into server"
yarn build
cd build
mkdir -p "../../../../api/pages/Login_Page_Build"
cp -r * "../../../../api/pages/Login_Page_Build"