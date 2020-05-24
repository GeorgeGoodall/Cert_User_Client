echo "Building landing page and copying into server"
yarn build
cd build
mkdir -p "../../../../api/pages/Landing_Page_Build"
cp -r * "../../../../api/pages/Landing_Page_Build"
cd ../
