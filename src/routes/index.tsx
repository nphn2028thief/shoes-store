import _ from "lodash";
import { Fragment, Suspense } from "react";
import { Navigate, Route, Routes as Router } from "react-router-dom";
import Loading from "../components/loading";
import CPath from "../constants/path";
import CRoute from "../constants/route";
import { useAppSelector } from "../store";

function Routes() {
  const { user } = useAppSelector((state) => state.authSlice);

  return (
    <Router>
      {_.isEmpty(user) ? (
        <Route
          path={CPath.PROFILE}
          element={<Navigate to={CPath.SIGNIN} replace />}
        />
      ) : (
        <>
          {/* <Route path={CPath.HOME} element={<Navigate to={CPath.HOME} />} /> */}
          <Route path={CPath.SIGNIN} element={<Navigate to={CPath.HOME} />} />
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
                <Suspense fallback={<Loading />}>
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
