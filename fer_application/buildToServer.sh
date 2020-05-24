echo "Building fer page and copying into server"
yarn build
cd build
mkdir -p "../../../../api/pages/FER_Page_Build"
cp -r * "../../../../api/pages/FER_Page_Build"
cd ../
