import _ from "lodash";
import { Fragment, Suspense } from "react";
import { Navigate, Route, Routes as Router } from "react-router-dom";
import SuspenseLoading from "~/components/suspense_loading";
import EPath from "../constants/path";
import CRoute from "../constants/route";
import { useAppSelector } from "../store";

function Routes() {
  const { user } = useAppSelector((state) => state.authSlice);

  return (
    <Router>
      {_.isEmpty(user) ? (
        <Route
          path={EPath.PROFILE}
          element={<Navigate to={EPath.SIGNIN} replace />}
        />
      ) : (
        <>
          {/* <Route path={EPath.HOME} element={<Navigate to={EPath.HOME} />} /> */}
          <Route path={EPath.SIGNIN} element={<Navigate to={EPath.HOME} />} />
        </>
      )}

      {CRoute.map((route) => {
        const Page = route.page;
        const Layout = route.layout ? route.layout : Fragment;

        return (
          <Route
            key={route.id}
            path={route.path}
            element={
              <Layout>
                <Suspense fallback={<SuspenseLoading />}>
                  <Page />
                </Suspense>
              </Layout>
            }
          />
        );
      })}
    </Router>
  );
}

export default Routes;
